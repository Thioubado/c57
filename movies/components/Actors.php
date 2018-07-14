<?php namespace Grcote7\Movies\Components;

use Cms\Classes\ComponentBase;
use Grcote7\Movies\Models\Actor;

class Actors extends ComponentBase {

  public $actors;

  public function componentDetails() {
    return [
      'name'        => 'Actors list',
      'description' => 'List of actors'
    ];
  }

  public function defineProperties() {
    return [
      'results'   => [
        'title'             => 'Number of Actors',
        'description'       => 'How many actors do you want to display?',
        'default'           => 0,
        'validationPattern' => '^[0-9]+$',
        'validationMessage' => 'Only numbers allowed'
      ],
      'sortOrder' => [
        'title'       => 'Sort Actors',
        'description' => 'Sort those actors',
        'type'        => 'dropdown',
        'default'     => 'name asc'
      ]
    ];
  }

  public function getSortOrderOptions() {
    return [
      'name asc'  => 'Name (Ascending)',
      'name desc' => 'Name (Descending)'
    ];
  }

  public function onRun() {
    $this->actors = $this->loadActors();
  }

  protected function loadActors() {

    $query = Actor::all();

    if ($this->property('sortOrder') === 'name asc') {
      $query = $query->sortBy('name');
    }

    if ($this->property('sortOrder') === 'name desc') {
      $query = $query->sortByDesc('name');
    }

    if ($this->property('results') > 0) {
      $query = $query->take($this->property('results'));
    }

    return $query;
  }

}
