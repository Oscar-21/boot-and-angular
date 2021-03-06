package com.jdriven.ng2boot;

import java.io.IOException;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

/**
 * WebConfig
 */
@Configuration
public class WebConfiguration implements WebMvcConfigurer {

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    // All resources go to where they should go
    registry.addResourceHandler(
      "/**/*.css", 
      "/**/*.html", 
      "/**/*.js", 
      "/**/*.js.map", 
      "/**/*.png", 
      "/**/*.ttf", 
      "/**/*.woff", 
      "/**/*.woff2",
      "/**/*.eot",
      "/**/*.svg",
      "/**/*.ico"
    ).setCachePeriod(0)
    .addResourceLocations("classpath:/static/");

    registry.addResourceHandler("/", "/**")
            .setCachePeriod(0)
            .addResourceLocations("classpath:/static/index.html")
            .resourceChain(true)
            .addResolver(new WebConfigurationPathResourceResolver());
  }

  private class WebConfigurationPathResourceResolver extends PathResourceResolver {
    @Override
    protected Resource getResource(String resourcePath, Resource location) throws IOException {
      return location.exists() && location.isReadable() ? location : null;
    }
    
  }
}