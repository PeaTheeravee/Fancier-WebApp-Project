import ProjectClip from "../video/Project-Clip.mp4";
function Video() {
    return(
        <video
            autoPlay
            loop
            muted
            style={{
            width: "auto",
            height: "auto",
            }}
        >
            <source src={ProjectClip} type="video/mp4" />
        </video>
    );
}
export default Video ;






