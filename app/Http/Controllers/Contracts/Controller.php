<?php

namespace App\Http\Controllers\Contracts;
use Illuminate\Http\Request;

interface Controller{
    function __construct(Request $request);
    function responseData();
    function receivPost();
    function index();
}