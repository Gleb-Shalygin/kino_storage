<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:50',
            'email' => 'required|string|email|max:50|unique:users',
            'password' => 'required|string|confirmed',
            'password_confirmation' => 'required|string'
        ];
    }

    public function messages(): array
    {
        return [
            // required
            'name.required' => 'Поле "Имя" обязательное для заполнения!',
            'email.required' => 'Поле "Логин" обязательное для заполнения!',
            'password.required' => 'Поле "Пароль" обязательное для заполнения!',
            'password_confirmation.required' => 'Поле "Подтвердите пароль" обязательное для заполнения!',
            // max
            'name.max' => 'Извините, достигнуто максимальное допустимое количество символов поля "Имя".',
            'email.max' => 'Извините, достигнуто максимальное допустимое количество символов поля "Логин".',
            // email
            'email.email' => 'К сожалению, почтовый ящик был введен не корректно.',
            // unique
            'email.unique' => 'Извините, этот почтовый ящик уже занят. Пожалуйста, выберите другой адрес электронной почты.',
            // confirmed
            'password.confirmed' => 'Подтвердите пароль!',
        ];
    }
}
