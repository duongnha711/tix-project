import Swal from "sweetalert2";

const AlertConfirm = ({...options},callback) => {
  Swal.fire({
    ...options,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6 !important",
    cancelButtonColor: "rgb(96, 105, 119)",
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.value) {
        callback()
    }
  });
};
export default AlertConfirm;
