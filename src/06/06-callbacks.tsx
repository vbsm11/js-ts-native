import {ChangeEvent, MouseEvent} from 'react'

/*const callback = () => {
    alert('Hey')
}

window.setTimeout(callback, 1000)*/

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    }

    const onNameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('NameChanged');
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age:' + event.currentTarget.value);
    }

    const onBlurFocus = () => {
        console.log('FocusBlur');
    }

    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={onBlurFocus}
            >Vladimir</textarea>

            <input
                onChange={onAgeChanged}
                type={'number'}
            />

            <button name='delete' onClick={deleteUser}>x</button>
        </div>
    )
}