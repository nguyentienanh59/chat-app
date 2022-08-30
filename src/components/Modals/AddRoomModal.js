import { Modal, Form, Input } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../Context/AppProvider";

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);

  const [form] = Form.useForm();

  const handleOk = () => {
    setIsAddRoomVisible(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsAddRoomVisible(false);
  };
  return (
    <div>
      <Modal
        title="Tạo phòng"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item label="Tên phòng" name="name">
            <Input placeholder="Nhập tên phòng" />
          </Form.Item>
          <Form.Item label="Mô tả" name="desc">
            <Input placeholder="Nhập mô tả" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
