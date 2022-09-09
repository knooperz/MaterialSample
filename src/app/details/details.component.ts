import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project, ProjectService } from '../project.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  project!: Project;
  subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.project  = this.projectService.loadProjekts()[id];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
