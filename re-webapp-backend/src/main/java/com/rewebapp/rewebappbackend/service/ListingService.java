package com.rewebapp.rewebappbackend.service;

import com.rewebapp.rewebappbackend.data.DetailsResponse;
import com.rewebapp.rewebappbackend.data.ListingResponse;
import com.rewebapp.rewebappbackend.entity.Listing;
import com.rewebapp.rewebappbackend.repository.ListingRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ListingService
{
    private final ListingRepo listingRepo;

    public List<ListingResponse> getListings(String query, Integer pageNumber) {
        /* page_idx = 0, page_len = 5, sort by price */
        Pageable pageable = PageRequest.of(pageNumber, 5, Sort.by("price").ascending());
        try{

            /* fetch data */
            Page<Object[]> data = listingRepo.findByQuery(query, pageable);
            List<ListingResponse> response = new ArrayList<>();

            /* map data */
            for(Object[] obj : data){
                Long id = (Long) obj[0];
                String title = (String) obj[1];
                String description = (String) obj[2];
                Float price = (Float) obj[3];
                byte[] imageData = (byte[]) obj[4];

                String imageDataBase64 = imageData != null? Base64.getEncoder().encodeToString(imageData) : null;

                ListingResponse listingResponse = new ListingResponse(id, title, description, price, imageDataBase64);
                response.add(listingResponse);
            }
            return response;
        }
        catch(Exception e){
            System.out.println(e.toString());
            return new ArrayList<>();
        }
    }

    /* get details from id */
    public DetailsResponse getDetails(Long id){
        try{
            Object[] data = (Object[]) listingRepo.details(id)[0];
            return new DetailsResponse(
                    (String) data[0],
                    (Double) data[1],
                    (Double) data[2],
                    (String) data[3],
                    (String) data[4]);
        }
        catch(Exception e){
            System.out.println(e.toString());
            return new DetailsResponse(null, null, null, null, null);
        }
    }

    public void addListing(Listing listing){
        try{
            listingRepo.save(listing);
        }
        catch(Exception e){
            System.out.println(e.toString());
        }
    }
}
