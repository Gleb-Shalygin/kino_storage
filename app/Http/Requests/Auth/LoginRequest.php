<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'login' => 'required|string|email:rfc,dns',
            'password' => 'required|string'
        ];
    }

    public function messages(): array
    {
        return [
            //required
            'login.required' => 'Поле логин обязательное для заполнения!',
            'password.required' => 'Поле пароль обязательное для заполнения!',
            //email
            'login.email' => 'Не правильный логин или пароль!',
        ];
    }
}
