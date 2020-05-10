import Swal from "sweetalert2";

const Alert = ({ ...options }) => {
  let timerInterval;
  return Swal.fire({
    ...options,
    onBeforeOpen: () => {
      timerInterval = setInterval(() => {
        const content = Swal.getContent();
        if (content) {
          const b = content.querySelector("b");
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 100);
    },
    onClose: () => {
      clearInterval(timerInterval);
    },
  });
};
export default Alert;
