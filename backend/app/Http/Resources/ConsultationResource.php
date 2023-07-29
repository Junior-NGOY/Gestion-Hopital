<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConsultationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       // return parent::toArray($request);
       return [
        'id'=>$this->id,
        'patient_id'=>$this->patient_id, 
        'motif_id'=>$this->motif_id, 
        'taille'=>$this->taille, 
        'poids'=>$this->poids, 
        'temperature'=>$this->temperature,
        'glycemie'=>$this->glycemie, 
        'cholesterole'=>$this->cholesterole, 
        'pa'=>$this->pa,
        'pas'=>$this->pas, 
        'pad'=>$this->pad, 
        'pouls'=>$this->pouls, 
        'fc'=>$this->fc, 
        'fr'=>$this->fr,
        'diurese'=>$this->diurese,
        'spo2'=>$this->spo2,
        'ta'=>$this->ta,
        'ddr'=>$this->ddr,
        'dpa'=>$this->dpa,
        'pc'=>$this->pc,
        'imc'=>$this->imc,
        'signeGen' => $this->signeGen,
        'hma'=>$this->hma, 
        'ca'=>$this->ca, 
        'antecedant'=>$this->antecedant, 
        'structure_id'=>$this->structure,
        'user_id'=>$this->user_id,
       ];
    }
}
