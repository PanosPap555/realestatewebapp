package com.rewebapp.rewebappbackend.controller;

import com.rewebapp.rewebappbackend.data.DetailsResponse;
import com.rewebapp.rewebappbackend.data.ListingResponse;
import com.rewebapp.rewebappbackend.entity.Listing;
import com.rewebapp.rewebappbackend.service.ListingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
public class ListingController {

    private final ListingService listingService;

    @GetMapping("/results/{query}/{pageNumber}")
    public ResponseEntity<List<ListingResponse>> results(@PathVariable String query, @PathVariable Integer pageNumber){
        return ResponseEntity.ok(listingService.getListings(query, pageNumber));
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<DetailsResponse> details(@PathVariable String id){
        return ResponseEntity.ok(listingService.getDetails(Long.parseLong(id)));
    }

    @PostMapping("/add-listing")
    public ResponseEntity<Void> addListing(@RequestBody Listing listing){
        listingService.addListing(listing);
        return ResponseEntity.ok().build();
    }
}
