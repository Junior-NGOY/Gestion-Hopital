<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            'id'=> $this->id,
            'nom'=> $this->nom,
            'prenom'=> $this->prenom,
            'postnom'=> $this->postnom,
            'sexe'=> $this->sexe,
            'etatcivil'=> $this->etatcivil,
            'lieunais'=> $this->lieunais,
            'datenais'=> $this->datenais,
            'telephone'=> $this->telephone,
            'fonction'=> $this->fonction,
            'adresse'=> $this->adresse,
            'specialite'=> $this->specialite,
            'numord'=> $this->numord,
            'nationalite'=> $this->nationalite,
            'email'=> $this->email,
            'password'=> $this->password,
        ];
    }
}
