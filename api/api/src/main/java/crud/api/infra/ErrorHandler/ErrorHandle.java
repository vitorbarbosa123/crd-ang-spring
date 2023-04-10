package crud.api.infra.ErrorHandler;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.persistence.EntityNotFoundException;

@RestControllerAdvice
public class ErrorHandle {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity errorHandle404() {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity errorHandle400(MethodArgumentNotValidException ex) {
        List<FieldError> error = ex.getFieldErrors();
        return ResponseEntity.badRequest().body(error.stream().map(ErrorHandlerValidation::new).toList());
    }   

    private record ErrorHandlerValidation(String box, String message) {

        public ErrorHandlerValidation(FieldError error) {
            this(error.getField(), error.getDefaultMessage());
        }

    }
}
