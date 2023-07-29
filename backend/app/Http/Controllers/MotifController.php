<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMotifRequest;
use App\Http\Resources\MotifResource;
use App\Models\Motif;
use Illuminate\Http\Request;

class MotifController extends Controller
{
    public function index(){
        //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
        return Motif::orderBy('id', 'desc')->paginate(5);
  }
  public function destroy(Motif $motif){
      $motif->delete();
      return response()->json('Motif Deleted');
  }
  public function store(StoreMotifRequest $request){
      Motif::create($request->validated());
      return response()->json('Categorie Created');
  }
  public function update(StoreMotifRequest $request, Motif $motif){
      $motif->update($request->validated());
      return response()->json('Categorie Updated');
  }
  public function show(Motif $motif){
      return new MotifResource($motif);
  }
}
