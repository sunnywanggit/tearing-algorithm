class Promise {
  static all(promiseList) {
    return new Promise((resolve, reject) => {
      const result = [];
      for (let i = 0; i < promiseList.length; i += 1) {
        const promise = promiseList[i];
        Promise.resolve(promise).then((res) => {
          result.push(res);
          if (result.length === promiseList.length) resolve(res);
        }).catch(reject);
      }
    });
  }

  static race(promiseList) {
    return new Promise((resolve, reject) => {
      const length = promiseList.length;

      if (length === 0) resolve();
      for (let i = 0; i < length; i += 1) {
        Promise.resolve(promiseList[i]).then(resolve, reject);
      }
    });
  }

  static allSettled(promiseList) {
    return new Promise((resolve) => {
      const result = [];
      for (let i = 0; i < promiseList.length; i += 1) {
        const promise = promiseList[i];
        Promise.resolve(promise).then((res) => {
          result.push({ status: 'fulfilled', value: res });
        }).catch((err) => {
          result.push({ status: 'rejected', reason: err });
        }).finally(() => {
          if (result.length === promiseList.length) resolve(result);
        });
      }
    });
  }
}
