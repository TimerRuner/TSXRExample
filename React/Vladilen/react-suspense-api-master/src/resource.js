export function useResource() {
  return {
    posts: wrapPromise(fetchPosts()),
    users: wrapPromise(fetchUsers())
  }
}

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

//! Метод для огортання проміса, для коректної роботи зі suspense
function wrapPromise(promise) {
  let status = 'pending'
  let result
  const suspender = promise.then(
    r => {
      result = r
      status = 'success'
    },
    e => {
      result = e
      status = 'error'
    }
  )
//! Дана обгортка повинна повернути даний об`єкт
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    }
  }
}

function fetchPosts() {
  return delay(3500)
    .then(() => fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'))
    .then(res => res.json())
}

async function fetchUsers() {
  await delay(1750)
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
  return await res.json()
}
