module ProjectHelpers
  def get_project(slug)
    data.projects.find { |p| p.slug == slug }
  end

  def project_preview(slug)
    project = get_project(slug)
    partial("projects/preview", locals: {project: project})
  end
end
