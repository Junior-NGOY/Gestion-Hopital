<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DetailResource extends JsonResource
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
        'id'=> $this->id,
        'detailexam'=> $this->detailexam,
        'examen_id'=> $this->examen_id,
      ];
    }
}
