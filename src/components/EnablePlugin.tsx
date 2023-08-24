import {
  useFormStore,
  Form,
  FormInput,
  FormLabel,
  FormField,
  FormSubmit,
  FormError,
} from "@ariakit/react";
import "../../styles/enablePlugin.css";

import { encodeFunctionData } from "viem";

import useGnosisBatch from "../queries/useGnosisBatch";
import useGetUserGaugePositions from "../queries/useGetUserGaugePositions";

import {
  smartGardenManagerABI,
  smartGardenManagerAddress,
  harvesterPluginAddress,
} from "../generated";

export function EnablePlugin() {
  const { mutate: gnosisBatch } = useGnosisBatch();
  const { data: gaugePositions, isLoading, error } = useGetUserGaugePositions();

  // defaulting: 86400(1 - day)
  const formPluginConfig = useFormStore({
    defaultValues: { gaugeAddr: "", cadence: 86400 },
  });
  const cadenceValue = formPluginConfig.useValue(
    formPluginConfig.names.cadence,
  );
  const gaugeAddrValue = formPluginConfig.useValue(
    formPluginConfig.names.gaugeAddr,
  );

  formPluginConfig.useSubmit(() => {
    const values = formPluginConfig.getState().values;

    const call: { [key: string]: string[] } = {};
    call[smartGardenManagerAddress[10]] = [
      encodeFunctionData({
        abi: smartGardenManagerABI,
        functionName: "enablePluginWithConfig",
        args: [
          harvesterPluginAddress[10] as `0x${string}`,
          false,
          {
            vault: values.gaugeAddr as `0x${string}`,
            cadenceSec: BigInt(values.cadence),
            lastCall: BigInt(0),
          },
        ],
      }),
    ];

    gnosisBatch({ calls: call });
  });

  // Use to modify the value of `cadenceTs` in the <select> action
  const onCadenceChangeAction = (event: React.ChangeEvent<HTMLSelectElement>) =>
    formPluginConfig.setValue(
      formPluginConfig.names.cadence,
      parseInt(event.target.value),
    );

  // Use to modify the value of `vault` in the <select> action for the gauges that safe is in
  const onGaugeChangeAction = (event: React.ChangeEvent<HTMLSelectElement>) =>
    formPluginConfig.setValue(
      formPluginConfig.names.gaugeAddr,
      event.target.value,
    );

  // Options for feeding the <options> html -> (10min, 1h, 1d, 3d, 1w)
  const cadenceOptions = [
    { sec: 600, str: "Once every ten minutes" },
    { sec: 3600, str: "Once an hour" },
    { sec: 86400, str: "Once a Day" },
    { sec: 259200, str: "Once every Three Day" },
    { sec: 604800, str: "Once a Week" },
  ];

  return (
    <>
      <h3>Configure your plugin preferences 🙏</h3>
      <Form store={formPluginConfig} className="wrapper">
        <div className="field">
          <FormLabel name={formPluginConfig.names.gaugeAddr}>
            Gauges your Safe is currently active
          </FormLabel>
          <FormField
            name={formPluginConfig.names.gaugeAddr}
            value={gaugeAddrValue}
            touchOnBlur={false}
            required
            render={<select onChange={onGaugeChangeAction} />}
          >
            {gaugePositions?.map((gauge, index) => {
              return (
                <option key={index} value={gauge.id}>
                  {gauge.pool_name}
                </option>
              );
            })}
          </FormField>
          <FormError
            name={formPluginConfig.names.gaugeAddr}
            className="error"
          />
        </div>
        <div className="field">
          <FormLabel name={formPluginConfig.names.cadence}>
            Operation Cadence
          </FormLabel>
          <FormField
            name={formPluginConfig.names.cadence}
            value={cadenceValue}
            touchOnBlur={false}
            required
            render={<select onChange={onCadenceChangeAction} />}
          >
            {cadenceOptions.map((option, index) => {
              return (
                <option key={index} value={option.sec}>
                  {option.str}
                </option>
              );
            })}
          </FormField>
          <FormError name={formPluginConfig.names.cadence} className="error" />
        </div>
        <div className="buttons">
          <FormSubmit className="button">
            Enable plugin, lets go!! 🚀
          </FormSubmit>
        </div>
      </Form>
    </>
  );
}
