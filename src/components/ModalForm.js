import React from "react";
import { Modal, Form, Input, TimePicker } from "antd";

const ModalForm = ({ show, onSave, onCancel, date }) => {
  const [form] = Form.useForm();
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onSave(values);
      form.resetFields();
    } catch (error) {}
  };
  return (
    <Modal
      title="Basic Modal"
      visible={show}
      okText="Save"
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form
        form={form}
        labelCol={{ span: 5 }}
        name="control-hooks"
        initialValues={{
          date,
        }}
      >
        <Form.Item name="date" label="Date">
          <Input disabled name="date" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of the event",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="start"
          label="Start Time"
          rules={[{ required: true, message: "Please provide a start time" }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          name="end"
          label="End Time"
          rules={[{ required: true, message: "Please provide an end time" }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
