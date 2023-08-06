<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::get('/contacts', [ContactController::class, "getContacts"]);
Route::get('/contact_id/{id}', [ContactController::class, "getContactOfId"]);
Route::post('/add_contact', [ContactController::class, "addContact"]);
Route::get('/delete/{id}', [ContactController::class, "deleteCon"]);
