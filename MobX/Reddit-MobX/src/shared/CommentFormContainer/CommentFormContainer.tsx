import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
import React, { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, updateComment } from "../../store/store"
import { CommentForm } from "../CommentForm/CommentForm"

class Comment {
    value = "Привіт з MobX"

    constructor() {
        makeAutoObservable(this)
    }

    udpateValue(newValue: string) {
        this.value = newValue
    }
}

const myComment = new Comment()

//! observer необхідний для слідкування і ререндеру себе при зміні страну
export const CommentFormContainer = observer(() => {
    // const value = useSelector<RootState, string>((state) => state.commentText)
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const [valueTouched, setValueTouched] = useState(false)
    const [valueError, setValueError] = useState("")

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        // dispatch(updateComment(event.target.value))
        myComment.udpateValue(event.target.value)
    }

    function handleBlur() {
        // setValueTouched(true)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setValueTouched(true)

        setValueError(validateValue())

        const isFormValid = !validateValue()
        if (!isFormValid) return

        alert("Form sent")
    }

    function validateValue() {
        if (myComment.value.length <= 3) return "Enter more 3 symbols"
        return ""
    }

    return (
        <CommentForm
            value={myComment.value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            error={valueError}
            touched={valueTouched}
            blur={handleBlur}
        />
    )
})
