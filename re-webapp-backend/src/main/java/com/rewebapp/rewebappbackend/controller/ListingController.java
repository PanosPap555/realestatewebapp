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

    public final ListingService listingService;

    @GetMapping("/results")
    public ResponseEntity<List<ListingResponse>> results(@RequestBody Map<String, String> request){
        return ResponseEntity.ok(listingService.getListings(request.get("query")));
    }

    @GetMapping("/details")
    public ResponseEntity<DetailsResponse> details(@RequestBody Map<String, String> request){
        return ResponseEntity.ok(listingService.getDetails(Long.parseLong(request.get("id"))));
    }

    @PostMapping("/add-listing")
    public ResponseEntity<Void> addListing(@RequestBody Listing listing){
        listingService.addListing(listing);
        return ResponseEntity.ok().build();
    }
}
