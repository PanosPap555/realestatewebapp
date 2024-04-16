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

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ListingService
{
    private final ListingRepo listingRepo;

    public List<ListingResponse> getListings(String query) {
        /* page_idx = 0, page_len = 5, sort by price */
        Pageable pageable = PageRequest.of(0, 5, Sort.by("price").ascending());
        try{
            List<ListingResponse> response = new ArrayList<>();
            /* fetch data */
            Page<Object[]> data = listingRepo.findByQuery(query, pageable);
            /* map data */
            for(Object[] obj : data){
                response.add(new ListingResponse(
                        (Long)   obj[0],
                        (String) obj[1],
                        (String) obj[2],
                        (Float)  obj[3]));
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
