import { Modal, Form, Input, TimePicker } from 'antd';
import PropTypes from 'prop-types';
import { timeFormat } from '../../utils';

function ModalForm({ date, show, onCancel, onSave }) {
  const [form] = Form.useForm();
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onSave({
        ...values,
        start: values.start.format(timeFormat),
        end: values.end.format(timeFormat),
      });
      form.resetFields();
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <Modal title="Event" visible={show} okText="Save" onOk={handleOk} onCancel={onCancel}>
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
              message: 'Please input the name of the event',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="start" label="Start Time" rules={[{ required: true, message: 'Please provide a start time' }]}>
          <TimePicker />
        </Form.Item>
        <Form.Item name="end" label="End Time" rules={[{ required: true, message: 'Please provide an end time' }]}>
          <TimePicker />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
}

ModalForm.propTypes = {
  date: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ModalForm;
