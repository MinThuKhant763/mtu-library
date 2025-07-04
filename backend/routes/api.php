<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserApiController;
use App\Http\Controllers\BookApiController;

Route::post('/register', [UserApiController::class, 'register']);

Route::post('/login', [UserApiController::class, 'login']);

Route::post('/logout', [UserApiController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/me', [UserApiController::class, 'viewProfile'])->middleware('auth:sanctum');

Route::apiResource('/books', BookApiController::class);