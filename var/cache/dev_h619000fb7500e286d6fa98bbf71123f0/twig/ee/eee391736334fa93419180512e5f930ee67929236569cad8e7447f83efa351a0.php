<?php

use Twig\Environment;
use function Shopware\Core\Framework\Adapter\Twig\sw_get_attribute;
use function Shopware\Core\Framework\Adapter\Twig\sw_escape_filter;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @LastDropSlider/storefront/block/cms-block-last-drop-slider.html.twig */
class __TwigTemplate_10b8f582a967bbe7e304c84718d5d9fc extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'block_last_drop_image_slider' => [$this, 'block_block_last_drop_image_slider'],
            'block_image_slider_inner' => [$this, 'block_block_image_slider_inner'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@LastDropSlider/storefront/block/cms-block-last-drop-slider.html.twig"));

        // line 1
        $this->displayBlock('block_last_drop_image_slider', $context, $blocks);
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function block_block_last_drop_image_slider($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "block_last_drop_image_slider"));

        // line 2
        echo "    ";
        $context["element"] = sw_get_attribute($this->env, $this->source, sw_get_attribute($this->env, $this->source, ($context["block"] ?? null), "slots", [], "any", false, false, false, 2), "getSlot", [0 => "imageSlider"], "method", false, false, false, 2);
        // line 3
        echo "    ";
        $context["columns"] = 1;
        // line 4
        echo "
    <div class=\"col-12\" data-cms-element-id=\"";
        // line 5
        echo sw_escape_filter($this->env, sw_get_attribute($this->env, $this->source, ($context["element"] ?? null), "id", [], "any", false, false, false, 5), "html", null, true);
        echo "\" type=\"";
        echo sw_escape_filter($this->env, sw_get_attribute($this->env, $this->source, ($context["element"] ?? null), "type", [], "any", false, false, false, 5), "html", null, true);
        echo "\">
        ";
        // line 6
        $this->displayBlock('block_image_slider_inner', $context, $blocks);
        // line 9
        echo "    </div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 6
    public function block_block_image_slider_inner($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "block_image_slider_inner"));

        // line 7
        echo "            ";
        $__internal_compile_0 = null;
        try {
            $__internal_compile_0 =             ((function () use ($context, $blocks) {
                $finder = $this->env->getExtension('Shopware\Core\Framework\Adapter\Twig\Extension\NodeExtension')->getFinder();

                $includeTemplate = $finder->find((("@Storefront/storefront/element/cms-element-" . sw_get_attribute($this->env, $this->source, ($context["element"] ?? null), "type", [], "any", false, false, false, 7)) . ".html.twig"));

                return $this->loadTemplate($includeTemplate ?? null, "@LastDropSlider/storefront/block/cms-block-last-drop-slider.html.twig", 7);
            })());
        } catch (LoaderError $e) {
            // ignore missing template
        }
        if ($__internal_compile_0) {
            $__internal_compile_0->display($context);
        }
        // line 8
        echo "        ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "@LastDropSlider/storefront/block/cms-block-last-drop-slider.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  104 => 8,  87 => 7,  80 => 6,  72 => 9,  70 => 6,  64 => 5,  61 => 4,  58 => 3,  55 => 2,  42 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% block block_last_drop_image_slider %}
    {% set element = block.slots.getSlot('imageSlider') %}
    {% set columns = 1 %}

    <div class=\"col-12\" data-cms-element-id=\"{{ element.id }}\" type=\"{{ element.type }}\">
        {% block block_image_slider_inner %}
            {% sw_include \"@Storefront/storefront/element/cms-element-\" ~ element.type ~ \".html.twig\" ignore missing %}
        {% endblock %}
    </div>
{% endblock %}
", "@LastDropSlider/storefront/block/cms-block-last-drop-slider.html.twig", "/home/melexsoft/Masaüstü/NewShopware/custom/plugins/LastDropSlider/src/Resources/views/storefront/block/cms-block-last-drop-slider.html.twig");
    }
}
