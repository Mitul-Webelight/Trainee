const A = new Promise((res, rej) => {
  setTimeout(() => {
    res('A is Resolved');
  }, 1000);
});
const B = new Promise((res, rej) => {
  setTimeout(() => {
    res('B is Resolved');
  }, 2000);
});
const C = new Promise((res, rej) => {
  setTimeout(() => {
    res('C is Resolved');
  }, 1000);
});
const D = new Promise((res, rej) => {
  setTimeout(() => {
    res('D is Resolved');
  }, 2000);
});

Promise.all([A, B, C, D])
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

Promise.allSettled([A, B, C, D])
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

Promise.race([A, B, C, D])
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

const W = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('W is resolved');
    }, 1000);
  });
};

const X = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('X is resolved');
    }, 2000);
  });
};

const Y = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('Y is resolved');
    }, 1000);
  });
};

const Z = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('Z is resolved');
    }, 2000);
  });
};

const promises = async () => {
  try {
    const [resultW, resultX, resultY, resultZ] = await Promise.all([
      W(),
      X(),
      Y(),
      Z(),
    ]);
    console.log(resultW);
    console.log(resultX);
    console.log(resultY);
    console.log(resultZ);
  } catch (e) {
    console.error(e);
  }
};

promises();
