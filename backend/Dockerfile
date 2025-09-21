# Use Maven to build the app
FROM maven:3.9.9-eclipse-temurin-22 AS build
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml ./
COPY src ./src

# Build the JAR (skip tests for faster builds)
RUN mvn clean package -DskipTests

# Use a lightweight JDK for runtime
FROM openjdk:22-jdk
WORKDIR /app

# Copy the built jar
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
