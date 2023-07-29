<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategorieRequest;
use App\Http\Resources\CategorieResource;
use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
  public function index(){
        //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
        return Categorie::orderBy('id', 'desc')->paginate(5);
  }
  public function destroy(Categorie $categorie){
      $categorie->delete();
      return response()->json('Categorie Deleted');
  }
  public function store(StoreCategorieRequest $request){
      Categorie::create($request->validated());
      return response()->json('Categorie Created');
  }
  public function update(StoreCategorieRequest $request, Categorie $categorie){
      $categorie->update($request->validated());
      return response()->json('Categorie Updated');
  }
  public function show(Categorie $categorie){
      return new CategorieResource($categorie);
  }
}
