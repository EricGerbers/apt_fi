import {Modal} from '../../components/shared/Modal'
export const ModalSelectToken = ({
  onClose,
  ...props
}) => {
  return (
    <Modal {...props} className='max-w-[40rem] w-full' onClose={onClose}>
      <div>test</div>
    </Modal>
  )
}