import Image from 'next/image'
import { Modal } from 'react-bootstrap'

const PhotoModal = ({
  show,
  setShow,
  src,
}: {
  show: boolean
  setShow: (value: boolean) => void
  src: string
}) => {
  const onHide = () => setShow(false)
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Image
          src={src}
          alt="alt"
          width={100}
          height={100}
          style={{ width: '100%', height: '100%' }}
        />
      </Modal.Body>
    </Modal>
  )
}

export default PhotoModal
