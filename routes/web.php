<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\User;
use App\Http\Controllers\Profile;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::post('/user/update', User\UpdateController::class)->name('user.update');
    Route::get('/user/edit', User\EditController::class)->name('user.edit');
    Route::get('/user/index', User\IndexController::class)->name('user.index');
    Route::get('/user/show', User\ShowController::class)->name('user.show');

    Route::get('/', HomeController::class)->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile/update',Profile\UpdateController::class)->name('profile.update');

});

require __DIR__.'/auth.php';
