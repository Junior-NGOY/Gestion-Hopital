<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
  public function index(){
       
        //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
        return User::orderBy('id', 'desc')->paginate(5);
       
  }
  public function destroy(User $user){
      $user->delete();
      return response()->json('User Deleted');
  }
  public function store(StoreUserRequest $request){
      User::create($request->validated());
      return response()->json('User Created');
  }
  public function update(StoreUserRequest $request, User $user){
      $user->update($request->validated());
      return response()->json('User Updated');
  }
  public function show(User $user){
      return new UserResource($user);
  }
}
