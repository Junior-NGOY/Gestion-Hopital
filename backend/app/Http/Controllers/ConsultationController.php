<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreConsultationRequest;
use App\Http\Resources\ConsultationResource;
use App\Models\Consultation;
use Illuminate\Http\Request;

class ConsultationController extends Controller
{
    public function index(){
        //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
        return Consultation::with(['user', 'structure'])->orderBy('id', 'desc')->paginate(5);
  }
  public function destroy(Consultation $consultation){
      $consultation->delete();
      return response()->json('Consultation Deleted');
  }

  public function store(StoreConsultationRequest $request){
    $data = $request->validated();
    $cons=Consultation::create($data);
    $cons->terrains()->attach($request['terrains']);
    $cons->details()->attach($request['examens']);
    $cons->produits()->sync($this->mapProduits($data['produits']));

    //$produits = collect($request['produits']($request['produits'],[]))
   // ->map(function ($produit)  {
   //     return ['posologie' => $produit];
   // });
   // var_dump($produits);
   // dd($produits);
   // $cons->produits()->sync($produits);
    //$cons->produits()->attach([$request['produits'],['posologie' => "valeur"]]);
    //$cons->produits()->attach($request['produits'],['posologie' => "salut"]);
    //$cons->produits()->sync($tableau);
   // $produitposologie=[];
   // $valeur=1;
   // foreach($request['posologie'] as $posologie){
    
   //     $cons->produits()->attach($request['produits'],['posologie' => $posologie]);
        # code...
   //     $valeur++;
 
        //$produitposologie[] = [
        //    'produit_id' => $request['produits'],
        //    'posologie' => $valeur
        //];
   // }
    
   // $cons->produits()->sync($produitposologie);
      return response()->json('Consultation Created');
  }
  //private function mapPosologie($tableau){
  //  foreach($tableau as $valeur){
  //      $cons->produits()->attach($request['produits'],['posologie' => $valeur]);
  //  }
//}
private function mapProduits($produits)
{
    return collect($produits)->map(function ($i) {
        return [
            'posologie' =>$i['posologie'],
            'produit_id' => $i['id']  
        ];
    });
}
  public function update(StoreConsultationRequest $request, Consultation $consultation){
      $consultation->update($request->validated());
      return response()->json('Consultation Updated');
  }
  public function show(Consultation $consultation){
      return new ConsultationResource($consultation);
  }
}
