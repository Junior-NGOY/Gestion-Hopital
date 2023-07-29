<?php

use App\Http\Controllers\PatientController;
use App\Http\Controllers\RdvController;
use App\Http\Controllers\StructureController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::resource('structures',StructureController::class);
Route::resource('patients',PatientController::class);
Route::resource('users',UserController::class);
Route::resource('rdvs',RdvController::class);
