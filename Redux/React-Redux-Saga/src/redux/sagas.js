import {takeEvery, put, call} from 'redux-saga/effects';
import {REQUEST_POST} from "./types";
import {hideLoader, requestPost, showAlert, showLoader} from "./actions";

export function* sagaWatcher() {
   yield takeEvery(REQUEST_POST, sagaWorker) //ловить конкретний екшн
}

function* sagaWorker(){
   try{
       yield put(showLoader()) //dispatch певну подію в store
       const payload = yield call(fetchPosts()) // отримуємо значення response.json()
       yield put(requestPost(payload))
       yield put(hideLoader())
   } catch(e) {
       yield put(showAlert('ЩОсь пішло не так'))
       yield put(hideLoader())
   }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}