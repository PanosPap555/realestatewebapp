package com.rewebapp.rewebappbackend.controller;

import com.rewebapp.rewebappbackend.data.DetailsResponse;
import com.rewebapp.rewebappbackend.data.ListingResponse;
import com.rewebapp.rewebappbackend.entity.Listing;
import com.rewebapp.rewebappbackend.service.ListingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
public class ListingController {

    private final ListingService listingService;

    @GetMapping("/results/{query}")
    public ResponseEntity<List<ListingResponse>> results(@PathVariable String query){
        return ResponseEntity.ok(listingService.getListings(query));
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<DetailsResponse> details(@PathVariable Long id){
        return ResponseEntity.ok(listingService.getDetails(id));
    }

    @PostMapping("/add-listing")
    public ResponseEntity<Void> addListing(@RequestBody Listing listing){
        listingService.addListing(listing);
        return ResponseEntity.ok().build();
    }
}
