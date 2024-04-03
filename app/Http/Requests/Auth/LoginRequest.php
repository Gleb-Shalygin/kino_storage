<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => 'required|string|email',
            'password' => 'required|string'
        ];
    }

    public function messages(): array
    {
        return [
            //required
            'email.required' => 'Поле логин обязательное для заполнения!',
            'password.required' => 'Поле пароль обязательное для заполнения!',
            //email
            'email.email' => 'К сожалению, почтовый ящик был введен не корректно.',
        ];
    }
}
