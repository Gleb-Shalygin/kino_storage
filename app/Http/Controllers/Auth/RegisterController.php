<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\Auth\RegisterService;

class RegisterController extends Controller
{
//    use RegistersUsers;
//
//    protected string $redirectTo = '/';

    public function __construct(protected RegisterService $service)
    {
        $this->middleware('guest');
    }

//    protected function create(array $data): Model|Builder
//    {
//        return User::query()->create([
//            'name' => $data['name'],
//            'email' => $data['email'],
//            'password' => Hash::make($data['password']),
//        ]);
//    }

    public function register(RegisterRequest $request)
    {
        return $this->service->register($request);
//        $user = $this->create($request->all());
//
//        event(new Registered($user));
//
//        $this->guard()->login($user);
//
//        if ($response = $this->registered($request, $user)) {
//            return $response;
//        }
//
//        return $request->wantsJson()
//            ? new JsonResponse([], 201)
//            : redirect($this->redirectPath());
    }
}
