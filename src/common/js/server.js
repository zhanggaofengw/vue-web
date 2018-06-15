import {ERR_OK, SUCCESS_CODE, ERROR_CODE} from './config'
// 查询
export function queryAll(url, that) {
  return new Promise((resolve, reject) => {
    that.$ajax.get(url).then((response) => {
        if (ERR_OK === response.status) {
          if (response.data.statueCode === SUCCESS_CODE) {
            const responseData = response.data
            resolve(responseData)
          } else {
            resolve(false)
          }
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

//添加、更新
export function addOrUpdate(url, data, that) {
  return new Promise((resolve, reject) => {
    that.$ajax.post(url, data).then((response) => {
      if (ERR_OK === response.status) {
        if (response.data.statueCode === SUCCESS_CODE) {
          resolve(true)
          that.$message({
            message: response.data.msg,
            type: 'success',
            duration: 1000
            //onClose: () => {
            //  resolve(true)
            //}
          })
        } else if (response.data.statueCode === ERROR_CODE) {
          resolve(false)
          that.$message({
            message: response.data.msg,
            type: 'error',
            duration: 1000
          })
        }
      } else {
        resolve(false)
        that.$message({
          message: '失败',
          type: 'error',
          duration: 1000
        })
      }
    }).catch(err => {
      reject(err)
    })
  })
}
