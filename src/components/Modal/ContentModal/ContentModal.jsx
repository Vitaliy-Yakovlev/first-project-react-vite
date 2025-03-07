import s from './ContentModal.module.css';

export default function ContentModal({ video, VideoIdEnglish }) {
  return (
    <div className={s.containerVideos}>
      {video?.results?.length > 0 ? (
        <iframe
          className={s.iframe}
          title="Video"
          src={`https://www.youtube.com/embed/${video?.results[0]?.key}`}
        ></iframe>
      ) : (
        <iframe
          className={s.iframe}
          title="Video"
          src={`https://www.youtube.com/embed/${VideoIdEnglish?.results[0]?.key}`}
        ></iframe>
      )}
    </div>
  );
}
