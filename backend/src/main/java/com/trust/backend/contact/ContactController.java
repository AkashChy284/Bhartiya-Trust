package com.trust.backend.contact;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/contact-info")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @GetMapping
    public ContactInfo getContactInfo() {
        List<ContactInfo> list = contactRepository.findAll();

        if (list.isEmpty()) {
            ContactInfo contact = new ContactInfo();
            contact.setPhone("");
            contact.setWhatsapp("");
            contact.setEmail("");
            contact.setAddress("");
            return contactRepository.save(contact);
        }

        return list.get(0);
    }

    @PutMapping("/{id}")
    public ContactInfo updateContactInfo(
            @PathVariable Long id,
            @RequestBody ContactInfo updated
    ) {
        ContactInfo contact = contactRepository.findById(id).orElseThrow();

        contact.setPhone(updated.getPhone());
        contact.setWhatsapp(updated.getWhatsapp());
        contact.setEmail(updated.getEmail());
        contact.setAddress(updated.getAddress());

        return contactRepository.save(contact);
    }
}