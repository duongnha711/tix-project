// 2019-01-09 -> 09-01-2019
export const changeFormateDate = (oldDate) => {
  return oldDate.toString().split("-").reverse().join("-");
};

// formatTime 13:00:00 -> 01:00 pm
export const convertFrom24To12Format = (time24) => {
  const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
  const period = +sHours < 12 ? "AM" : "PM";
  const hours = +sHours % 12 || 12;

  return `${hours}:${minutes} ${period}`;
};

export function removeDuplicateInArr(arr) {
  return arr.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
}
export function getUniqueListByDate(arr, key) {
  return [
    ...new Map(arr.map((item) => [item[key].substring(0, 10), item])).values(),
  ];
}

export const formatCurrencyVND = (x) => {
  return x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};



export function getUniqueListByCinema(arr, key, childKey) {
  return [...new Map(arr.map((item) => [item[key][childKey], item])).values()];
}

//getArrSeatAsNum
export const getArrNorSeatListBy = (arr) => {
  let resultArr = [];
  arr.forEach((item) => {
    if (item.loaiGhe === "Thuong" && resultArr.length < 40) {
      resultArr.push(item);
    }
  });
  return resultArr;
};

export const getArrVipSeatListBy = (arr) => {
  let resultArr = [];
  arr.forEach((item) => {
    if (item.loaiGhe === "Vip" && resultArr.length < 30) {
      resultArr.push(item);
    }
  });
  return resultArr;
};

export const addNameToShowNormal = (arr) => {
  let newArr = [];
  let nameToShow = "";
  arr.forEach((item, index) => {
    if (index < 10) {
      nameToShow = `A${index + 1}`;
    }
    if (index < 20 && index >= 10) {
      nameToShow = `B${index - 9}`;
    }
    if (index < 30 && index >= 20) {
      nameToShow = `C${index - 19}`;
    }
    if (index < 40 && index >= 30) {
      nameToShow = `D${index - 29}`;
    }
    newArr.push({ ...item, nameToShow });
  });
  return newArr;
};

export const addNameToShowVip = (arr) => {
  let newArr = [];
  let nameToShow = "";
  arr.forEach((item, index) => {
    if (index < 10) {
      nameToShow = `E${index + 1}`;
    }
    if (index < 20 && index >= 10) {
      nameToShow = `F${index - 9}`;
    }
    if (index < 30 && index >= 20) {
      nameToShow = `G${index - 19}`;
    }
    newArr.push({ ...item, nameToShow });
  });
  return newArr;
};

export function sortName(arr, value) {
  return arr.sort((a, b) => {

    const x = a.nameToShow.toLowerCase();
    const y = b.nameToShow.toLowerCase();
    if (x < y) {
      return -value;
    }
    if (x > y) {
      return value;
    }
    return 0;
  });
}
