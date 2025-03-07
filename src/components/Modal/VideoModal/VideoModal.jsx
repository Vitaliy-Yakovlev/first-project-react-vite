import { useState } from 'react';
import { IoLogoYoutube } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from '../Modal.jsx';
import ContentModal from '../ContentModal/ContentModal.jsx';
import s from '../Modal.module.css';

export default function VideoModal({ video, VideoIdEnglish }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button type="button" onClick={toggleModal} className="btnYouTube">
        <IoLogoYoutube className="loLogoYoutube" />
      </button>
      {showModal && (
        <>
          <Modal onClose={toggleModal}>
            <button
              type="button"
              onClick={toggleModal}
              className={s.btnClosesYoutube}
            >
              <AiOutlineClose className={s.closesYoutube} />
            </button>
            <ContentModal video={video} VideoIdEnglish={VideoIdEnglish} />
          </Modal>
        </>
      )}
    </div>
  );
}
