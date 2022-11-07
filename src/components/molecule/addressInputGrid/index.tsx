import { memo } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

import { Form, Tooltip } from "antd";
import AddressInput from "../../../components/atom/addressInput";

const AddressGridComponent = () => {
  return (
    <Form.List
      name="addresses"
      initialValue={[{}]}
      rules={[
        {
          validator: async (_, addresses) => {
            if (!addresses || addresses.length < 1) {
              return Promise.reject(
                new Error("Preencha no minimo um endereço!"),
              );
            }
          },
        },
      ]}
    >
      {(fields, { add, remove }, { errors }) => (
        <>
          <Form.Item className="sticky top-0 z-10 bg-blue-100">
            <div className="flex justify-between items-center">
              <p>{`Endereços (${fields.length})`}</p>
              <Tooltip placement="topLeft" title={"Add endereço"}>
                <button
                  type="button"
                  className="text-blue-900"
                  onClick={() => add()}
                >
                  <PlusCircleOutlined />
                </button>
              </Tooltip>
            </div>
          </Form.Item>
          {fields.map(({ name, ...field }, key) => (
            <AddressInput
              key={key + Date.now()}
              name={name}
              field={field}
              fieldsLength={fields.length}
              remove={remove}
              index={key}
            />
          ))}
          {!!errors.length && (
            <Form.Item>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          )}
        </>
      )}
    </Form.List>
  );
};

export default memo(AddressGridComponent);
