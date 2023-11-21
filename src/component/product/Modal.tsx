import { Modal } from "antd";

const Modals = ({
  isModalOpen,
  modalContent,
  handleSubmit,
  handleCancel,
}: any) => {
  return (
    <div>
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default Modals;