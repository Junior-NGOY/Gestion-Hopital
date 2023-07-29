<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreExamenRequest;
use App\Http\Resources\ExamenResource;
use App\Models\Examen;
use Illuminate\Http\Request;

class ExamenController extends Controller
{
    public function index(){
       
        //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
        return Examen::orderBy('id', 'desc')->paginate(5);
       
  }
  public function destroy(Examen $examen){
      $examen->delete();
      return response()->json('Examen Deleted');
  }
  public function store(StoreExamenRequest $request){
      Examen::create($request->validated());
      return response()->json('Examen Created');
  }
  public function update(StoreExamenRequest $request, Examen $examen){
      $examen->update($request->validated());
      return response()->json('Examen Updated');
  }
  public function show(Examen $examen){
      return new ExamenResource($examen);
  }
}
