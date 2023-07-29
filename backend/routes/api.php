<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\DetailController;
use App\Http\Controllers\ExamenController;
use App\Http\Controllers\MotifController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\RdvController;
use App\Http\Controllers\StructureController;
use App\Http\Controllers\TerrainController;
use App\Http\Controllers\UserController;
use App\Models\Examen;
use App\Models\Produit;
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
Route::resource('examens',ExamenController::class);
Route::resource('details',DetailController::class);
Route::resource('terrains',TerrainController::class);
Route::resource('categories',CategorieController::class);
Route::resource('produits',ProduitController::class);
Route::resource('motifs',MotifController::class);
Route::resource('consultations',ConsultationController::class);
