<?php

namespace App\Http\Controllers\Externo\Login;

use App\Http\Controllers\Auth\LoginController;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Exceptions\LoginError;
use Illuminate\Support\Facades\Validator;


class Login extends LoginController{

    protected $validade;


    public function showLoginForm($erros = null){
        $token = csrf_token();
        return Inertia::render('v2.0/Externo/Login', [
            'csrf_token' => $token,
            'erros'      => $erros
        ]);
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);
        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.

        if($this->validator->fails()){
            return $this->showLoginForm($this->validator->errors(),"400");
        }

        if (method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);
        return $this->sendFailedLoginResponse($request);
    }

    protected function validateLogin(Request $request)
    {
        $this->validator =  Validator::make($request->all(), [
            $this->username() => 'required|string',
            'password' => 'required|string',
        ]);
        return $this->validator;

    }

    protected function sendFailedLoginResponse(Request $request)
    {
        return $this->showLoginForm(LoginError::withMessages([$this->username() => [trans('auth.failed')]])->errors(),"400");
    }

    //protected function sendFailedLoginResponse(Request $request)
    // {
    //     dd($this->validade->errors());
    //     return $this->showLoginForm($this->validade->errors());
    // }

}